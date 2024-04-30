interface CaseStudy {
  title: string,
  description: string,
  buttonText: string,
  image: string,
  imageOrder?: string
  imageAlt?: string
  extraStyles?: string
}

export function CaseStudy({ title, description, buttonText, image, imageOrder, imageAlt, extraStyles }: CaseStudy) {
  return <div className={`md:flex ${extraStyles}`}>
    <section className={`px-6 md:order-${imageOrder} md:items-center md:w-1/2`}>
      <img src={image} alt={imageAlt} className="w-full h-full rounded-md" />
    </section>
    <section className="w-11/12 m-auto h-96 p-6 md:w-1/2 md:p-14">
      <p className="text-4xl font-bold text-center opacity-60">{title}</p>
      <p className="pt-6 text-xl text-center opacity-50 px-4 md:px-48">{description}</p>
      <button className="p-1 w-[158px] rounded-full bg-gradient-to-r from-orange-500 to-pink-600 m-auto mt-6 block">
        <span className="w-full block text-xs font-bold p-2 px-3 bg-white rounded-full">{buttonText}</span>
      </button>
    </section>
  </div>
}