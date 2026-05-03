import { LinkedInRecommendation } from './components/LinkedInRecommendation';

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-transparent p-4 md:p-8">
      <LinkedInRecommendation
        recommenderName="Plamena Kadiyska"
        recommenderTitle="Facilities Coordinator"
        recommenderCompany="University of Greenwich"
        recommenderImage="./1649141797234.jpeg"
        relationship="Plamena managed Roel directly"
        date="December 1, 2025"
        recommendationText="Roel has been an exceptional Student Ambassador who consistently goes above and beyond in supporting a wide range of events and activities. During the years, he demonstrated remarkable initiative by stepping in to lead and deliver a Cyber Security and Digital Forensics taster sessions, creating multiple programmes to ease administrative tasks for events, sharing expertise with the team and fellow Student Ambassadors. His professionalism, proactivity, and teamwork ensured the sessions and events are a success, showcasing his commitment to both the Events Team and the School of Computing and Mathematical Sciences.

Beyond event support, Roel identified an opportunity to enhance our student-led marketing efforts. He not only volunteered to feature in videos but also encouraged his peers to participate, helping us create authentic, trend-aligned content that reflects student life and experience. Furthermore, when the team needed a professionally filmed video promoting BSc Computer Science at short notice, Roel collaborated seamlessly with academics and our team to deliver outstanding results.

Roel’s dedication extends beyond tasks—he genuinely cares about the wellbeing of team members, offering support during stressful situations and maintaining a positive, calm, and approachable demeanour. His contributions to events such as Open Days and the School Games Jam have been invaluable, and his enthusiasm and reliability make him a true asset to the school. I am confident that Roel deserves recognition for his hard work, commitment, and continuous growth. He exemplifies the qualities of an outstanding ambassador and team player. 

I am confident in his ability to make a significant impact in any professional environment throughout his future career. Since his graduation, he has been greatly missed and has left a legacy that will be difficult to replace."
      />
    </div>
  );
}