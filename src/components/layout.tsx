export function Layout({children}:{children:JSX.Element}){
    return(
        <section className="flex bg-gradient-to-t h-screen from-[#EB03FF] items-center to-[#3A0D84]">
        <svg className="absolute" fill="none" height="100%" viewBox="0 0 400 400" width="100%" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_17_17)">
            <g filter="url(#filter0_f_17_17)">
              <path d="M128.6 0H0V322.2L51.5 67.5L128.6 0Z" fill="#EB03FF"></path>
              <path d="M0 322.2V400H240H320L51.5 67.5L0 322.2Z" fill="#FF0F9F"></path>
              <path d="M320 400H400V78.75L51.5 67.5L320 400Z" fill="#3A0D84"></path>
              <path d="M400 0H128.6L51.5 67.5L400 78.75V0Z" fill="#FAD8F4"></path>
            </g>
          </g>
          <defs>
            <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_17_17" width="720.666" x="-160.333" y="-160.333">
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
              <feGaussianBlur result="effect1_foregroundBlur_17_17" stdDeviation="80.1666"></feGaussianBlur>
            </filter>
          </defs>
        </svg>
        {children}
      </section>
    )
}