import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const testimonialImages = [
	{
		src: "/images/testimonials/t1.jpeg",
		alt: "Testimonial 1",
	},
	{
		src: "/images/testimonials/t2.jpeg",
		alt: "Testimonial 2",
	},
	{
		src: "/images/testimonials/t3.jpeg",
		alt: "Testimonial 3",
	},
	{
		src: "/images/testimonials/t4.jpeg",
		alt: "Testimonial 4",
	},
	{
		src: "/images/testimonials/t5.jpeg",
		alt: "Testimonial 5",
	},
];

const TestimonialsSection = () => {
	const [emblaRef] = useEmblaCarousel(
		{
			loop: true,
			align: "start",
			dragFree: true,
			containScroll: "trimSnaps",
		},
		[
			Autoplay({
				delay: 2300,
				stopOnInteraction: false,
				stopOnMouseEnter: true,
			}),
		]
	);

	return (
		<section className="bg-[#171717] text-[#F5E9DC]">
			<div className="mx-auto">
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex gap-3 sm:gap-4">
						{testimonialImages.map((item, index) => (
							<div
								key={item.src}
								className="min-w-0 flex-[0_0_82%] sm:flex-[0_0_60%] md:flex-[0_0_48%] lg:flex-[0_0_40%]"
							>
								<div className="group relative aspect-[16/9] overflow-hidden rounded-[4px] bg-[#222]">
									<img
										src={item.src}
										alt={item.alt}
										className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
									/>

									<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;