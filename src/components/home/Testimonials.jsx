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
    <section className="bg-[#171717] py-16 text-[#F5E9DC]">
      <div className="mx-auto">
        <div className="mb-9 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <h2 className="max-w-[31rem] text-[2rem] font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-[2.6rem] lg:text-[2.5rem]">
            Founders who went from{" "}
            <span className="font-extrabold">overlooked to obvious</span>
          </h2>

          <p className="max-w-[28rem] text-sm font-semibold leading-snug text-white lg:ml-auto lg:pt-7 lg:text-right">
            With our repeatable story-led content system that builds measurable
            momentum.
          </p>
        </div>

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

                  <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#F4A261] text-xs font-extrabold text-black">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-7 max-w-[46rem] text-center text-base font-extrabold leading-snug text-white sm:text-lg">
          When your story is clear and your system is solid, the right people
          find you.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;