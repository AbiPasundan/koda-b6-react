export default function AuthImage({image}) {
	return (
		<section className="hidden md:flex">
			<img src={image} alt="Image"/>
		</section>
	)
}