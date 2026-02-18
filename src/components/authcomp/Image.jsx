export default function AuthImage({image}) {
	return (
		<section className="hidden md:flex">
			<img loading="lazy" src={image} alt="Image"/>
		</section>
	)
}