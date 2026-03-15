// Data Types
interface Testimonial {
  id: number;
  name: string;
  role: string;
  review: string;
  rating: number;
  model: string;
  avatar: string;
}

// Props
export interface TestimonialCardProps {
  testimonial: Testimonial;
}