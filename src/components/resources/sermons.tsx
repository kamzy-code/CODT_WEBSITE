import Link from "next/link";

const sermons = [
  {
    id: "4VsmHfgfCJw",
    title: "Power in the Name of Jesus || Sunday Service || Bishop Joel Njoku-Andrew || Jan 21st, '24",         // to be filled
    thumbnail: "",     // to be filled
  },
  {
    id: "ca7TtF7cdHM",
    title: "The Power of Love || Communion Service || Bishop Joel Njoku-Andrew || Feb 4th, '24",
    thumbnail: "",
  },
  {
    id: "6DoyOgi1Myc",
    title: "If Not God || Thanksgiving Service || Bishop Joel Njoku-Andrew (Word Session)",
    thumbnail: "",
  },
  {
    id: "9mCZcnn1S2c",
    title: "Benefits of God's Love || Sunday Service || Bishop Joel Njoku || Feb 18th, '24",
    thumbnail: "",
  },
  {
    id: "yORvmb0TfrM",
    title: "Created for Extraordinary Things || Bishop Joel Njoku-Andrew (Word Session)",
    thumbnail: "",
  },
  {
    id: "oDRUgQxr5Ug",
    title: "The Power To Arise || Resurrection Service || Bishop Joel Njoku-Andrew || March 31st, 2024",
    thumbnail: "",
  },
  {
    id: "tpWYKLiHHFQ",
    title: "The Gates of Hell || Sunday Service || Bishop Joel Njoku-Andrew || April 28th, 2024",
    thumbnail: "",
  },
  {
    id: "CLz50C1sbhA",
    title: "Dealing with the Gates of Hell || Sunday Service || Bishop Joel Njoku-Andrew || April 21st, 2024",
    thumbnail: "",
  },
  {
    id: "PuLeDUEa5BI",
    title: "Withstanding the Gates of Hell || Sunday Service || Bishop Joel Njoku-Andrew || April 14th, 2024",
    thumbnail: "",
  },
  {
    id: "HHOzpaLwtX4",
    title: "How To Frame Your World With Your Word - Hebrews 11:3 || Bishop Joel Njoku-Andrew",
    thumbnail: "",
  },
  {
    id: "riFlG_kO-74",
    title: "Secret to Increase Pt. 2 (Fellowship With God) || Bishop Joel Njoku-Andrew || I Corinthians 1:9",
    thumbnail: "",
  },
  {
    id: "zBJmfqJ1Neo",
    title: "The Blood Still Speaks: A Powerful Healing Service with Bishop Joel Njoku-Andrew || 10th Aug 2025",
    thumbnail: "",
  },
];


export function SermonsGrid() {

  return (
    <section className="flex items-center justify-center section-padding">
      <div className="container-max w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
        {sermons.map(({ id, title, thumbnail }) => (
          <div key={id} className="aspect-video bg-gray-50">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${id}`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}

        <div className="mt-4 col-span-full flex justify-center items-center">
          <Link
            href={
              "https://www.youtube.com/playlist?list=PLr3x6yem7PgCkHq6opGXgbo46rhUZl021"
            }
            target="_blank"
          >
            <button className="btn-primary h-12 hover:bg-red-600 mx-auto">
              Listen to More Sermon
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
