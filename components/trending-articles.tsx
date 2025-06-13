import Link from "next/link"

const trendingArticles = [
  {
    title: "SKYBELL SLIMLINE LED GUIDE",
    link: "/help-center/articles/skybell-slimline-led-guide",
  },
  {
    title: "ALARM.COM CAMERA - CLIP LIMIT REACHED",
    link: "/help-center/articles/alarm-com-camera-clip-limit",
  },
  {
    title: "WHAT HOURS IS YOUR CALL CENTER OPEN?",
    link: "/help-center/articles/call-center-hours",
  },
  {
    title: "2GIG GC3 - RADIO NOT RESPONDING",
    link: "/help-center/articles/2gig-gc3-radio-not-responding",
  },
  {
    title: "ALARM.COM OUTDOOR CAMERA - OFFLINE",
    link: "/help-center/articles/alarm-com-outdoor-camera-offline",
  },
]

export default function TrendingArticles() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Trending Articles</h2>
      <ul className="space-y-3">
        {trendingArticles.map((article, index) => (
          <li key={index}>
            <Link href={article.link} className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
