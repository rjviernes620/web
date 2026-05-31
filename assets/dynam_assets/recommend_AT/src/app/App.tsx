import { LinkedInRecommendation } from './components/LinkedInRecommendation';

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-transparent p-4 md:p-8">
      <LinkedInRecommendation
        recommenderName="Amy Telford"
        recommenderTitle="Cyber Security Analyst"
        recommenderCompany="NHS Business Services Authority"
        recommenderImage="./1679832337255.jpg"
        relationship="Amy was Roel's Mentor"
        date="April 28, 2026"
        recommendationText="I had the pleasure of mentoring Roel during his time at university and it was great to see how much he developed over that time. From the start, he was keen to learn and always put the effort in, which really showed in the progress he made.

He was easy to work with, asked the right questions, and took feedback on board really well. Whether it was working through ideas or getting stuck into smaller projects, he was always engaged and willing to improve.

What stood out most to me was his attitude. Even when things got busy, he stayed positive and kept pushing himself, which made a big difference.

It’s been really good to see his growth both personally and professionally, and I’ve no doubt he’ll continue to do well. I’d happily recommend him to anyone looking for someone reliable, hardworking, and great to work with."
      />
    </div>
  );
}