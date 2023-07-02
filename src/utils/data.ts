import { cache } from "./cache";
import axios from 'axios'
import { TopData } from "./utils";
export async function validate_user(user:string):Promise<number>{
    const res = await fetch(`https://api.github.com/users/${user}`)
    return res.status
}

export async function fetchData(user: string): Promise<TTop[]> {
    if (!cache(user)) {
      const res = await axios.get(`https://api.github.com/users/${user}/repos?sort=created&per_page=50&type=owner`);
      const data = res.data;
      const filtered = await filterData(data);
      cache(user, filtered);
      return filtered;
    } else {
      return cache(user);
    }
  }
  
  export async function filterData(results: any): Promise<TTop[]> {
    const Repos: TRepos[] = [];
    await Promise.allSettled(
      results.map(async (repo: any) => {
        if (!repo.fork && repo.language) {
          const langs = await fetchLangs(repo.languages_url);
          Repos.push({ name: repo.name, language: repo.language, languages: langs });
        }
      })
    );
    const data = TopData(Repos)
    return data;
  }
  
  function fetchLangs(lang_url: string): Promise<TLang[]> {
    return new Promise<TLang[]>((resolve, reject) => {
      const data: TLang[] = [];
      axios
        .get(lang_url)
        .then((response) => {
          const langs: object = response.data;
          Object.entries(langs).forEach(([key, value]: [string, number]) => {
            data.push({ name: key, fileSize: value });
          });
          resolve(data);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        });
    });
  }

