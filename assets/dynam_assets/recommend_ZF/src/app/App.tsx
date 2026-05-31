import { LinkedInRecommendation } from './components/LinkedInRecommendation';

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-transparent p-4 md:p-8">
      <LinkedInRecommendation
        recommenderName="Zoe Ferrer"
        recommenderTitle="Marketing & Events Assistant"
        recommenderCompany="University of Greenwich"
        recommenderImage="./1675169749910.jpeg"
        relationship="Zoe worked with Roel on the same team"
        date="April 16, 2026"
        recommendationText="I had the pleasure of working with Roel as a Social Media Assistant for the Faculty of Engineering and Science at the University of Greenwich. He is a highly hardworking and passionate team member who consistently brought fresh ideas and innovative thinking to the table. Roel approached every project with full commitment and was always looking for new ways to make our content engaging, relevant, and impactful. Many of our highest‑engagement videos can be credited to his creativity and forward‑thinking approach.

Beyond social media, I also had the opportunity to work with Roel on events. He is a fast learner, a natural leader, and someone who is always ready to step up - especially in high‑pressure situations. Roel is a valuable team player and would be a fantastic asset to any team."
      />
    </div>
  );
}