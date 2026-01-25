export default function AuthHeader({ title, text}) {
	return (
		<div className="py-5 flex flex-col gap-5">
			<h1 className="text-[#8E6447] font-normal text-[22px]">{title}</h1>
			<span className="text-[#4F5665] text-[16px]  ">{text}</span>
		</div>
	)
}