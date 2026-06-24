import { LinkedInRecommendation } from './LinkedInRecommendation'

export default function Recommendations() {
  const recommendationsData = [
    {
      recommenderName: "Plamena Kadiyska",
      recommenderTitle: "Facilities Coordinator",
      recommenderCompany: "University of Greenwich",
      recommenderImage: "/assets/img/recommenders/paul_kearney.jpeg", // Wait! The image in recommend_PK/public was named 1649141797234.jpeg, which we copied to paul_kearney.jpeg. That matches!
      relationship: "Plamena managed Roel directly",
      date: "December 1, 2025",
      recommendationText: `Roel has been an exceptional Student Ambassador who consistently goes above and beyond in supporting a wide range of events and activities. During the years, he demonstrated remarkable initiative by stepping in to lead and deliver a Cyber Security and Digital Forensics taster sessions, creating multiple programmes to ease administrative tasks for events, sharing expertise with the team and fellow Student Ambassadors. His professionalism, proactivity, and teamwork ensured the sessions and events are a success, showcasing his commitment to both the Events Team and the School of Computing and Mathematical Sciences.

Beyond event support, Roel identified an opportunity to enhance our student-led marketing efforts. He not only volunteered to feature in videos but also encouraged his peers to participate, helping us create authentic, trend-aligned content that reflects student life and experience. Furthermore, when the team needed a professionally filmed video promoting BSc Computer Science at short notice, Roel collaborated seamlessly with academics and our team to deliver outstanding results.

Roel’s dedication extends beyond tasks—he genuinely cares about the wellbeing of team members, offering support during stressful situations and maintaining a positive, calm, and approachable demeanour. His contributions to events such as Open Days and the School Games Jam have been invaluable, and his enthusiasm and reliability make him a true asset to the school. I am confident that Roel deserves recognition for his hard work, commitment, and continuous growth. He exemplifies the qualities of an outstanding ambassador and team player.

I am confident in his ability to make a significant impact in any professional environment throughout his future career. Since his graduation, he has been greatly missed and has left a legacy that will be difficult to replace.`
    },
    {
      recommenderName: "Amy Telford",
      recommenderTitle: "Cyber Security Analyst",
      recommenderCompany: "NHS Business Services Authority",
      recommenderImage: "/assets/img/recommenders/andrew_timmins.jpg", // We copied 1679832337255.jpg to andrew_timmins.jpg.
      relationship: "Amy was Roel's Mentor",
      date: "April 28, 2026",
      recommendationText: `I had the pleasure of mentoring Roel during his time at university and it was great to see how much he developed over that time. From the start, he was keen to learn and always put the effort in, which really showed in the progress he made.

He was easy to work with, asked the right questions, and took feedback on board really well. Whether it was working through ideas or getting stuck into smaller projects, he was always engaged and willing to improve.

What stood out most to me was his attitude. Even when things got busy, he stayed positive and kept pushing himself, which made a big difference.

It’s been really good to see his growth both personally and professionally, and I’ve no doubt he’ll continue to do well. I’d happily recommend him to anyone looking for someone reliable, hardworking, and great to work with.`
    },
    {
      recommenderName: "Zoe Ferrer",
      recommenderTitle: "Marketing & Events Assistant",
      recommenderCompany: "University of Greenwich",
      recommenderImage: "/assets/img/recommenders/zoe_ferrer.jpeg", // We copied 1675169749910.jpeg to zoe_ferrer.jpeg.
      relationship: "Zoe worked with Roel on the same team",
      date: "April 16, 2026",
      recommendationText: `I had the pleasure of working with Roel as a Social Media Assistant for the Faculty of Engineering and Science at the University of Greenwich. He is a highly hardworking and passionate team member who consistently brought fresh ideas and innovative thinking to the table. Roel approached every project with full commitment and was always looking for new ways to make our content engaging, relevant, and impactful. Many of our highest‑engagement videos can be credited to his creativity and forward‑thinking approach.

Beyond social media, I also had the opportunity to work with Roel on events. He is a fast learner, a natural leader, and someone who is always ready to step up - especially in high‑pressure situations. Roel is a valuable team player and would be a fantastic asset to any team.`
    }
  ]

  return (
    <section className="py-20 bg-[#0a0b10]" id="recommendations">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Recommendations
          </span>
          <h2 className="text-3xl md:text-4xl font-consolas font-bold text-white mt-4 mb-4">
            Endorsements & Recommendations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What others say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendationsData.map((rec) => (
            <LinkedInRecommendation
              key={rec.recommenderName}
              recommenderName={rec.recommenderName}
              recommenderTitle={rec.recommenderTitle}
              recommenderCompany={rec.recommenderCompany}
              recommenderImage={rec.recommenderImage}
              relationship={rec.relationship}
              recommendationText={rec.recommendationText}
              date={rec.date}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
