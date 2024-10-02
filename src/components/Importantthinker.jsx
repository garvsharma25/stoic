import React from "react";

const Importantthinker = () => {
  const posts = [
    {
      post: "Roman Emperor",
      description:
        "Roman Emperor Marcus Aurelius, born nearly two millennia ago is perhaps the best known Stoic leader in history. He was born in a prominent family but nobody at the time would have predicted that he would one day be Emperor of the Empire. Little is known of his childhood but he was a serious young man who enjoyed wrestling, boxing and hunting. Around his teenage years, the reigning emperor, Hadrian, childless and nearing death, picked his successor of choice, Antoninus. He was a senator who was also childless and was required to adopt Marcus, as per Hadrian’s condition. Antoninus eventually died in 161 and it is when Marcus’s reign began.",
      title: "Marcus Aurelius",

      image:
      "1.jpg", },
    {
      post: "Writer and politician",
      title: "SENECA",
      description:
        "he second most prominent Stoic in history is Seneca who was born in southern Spain over 2,000 years ago and educated in Rome. He was the son of Seneca the Elder, a well regarded Roman writer as well as later in his life uncle to the poet Lucan. Seneca pursued a career in politics and became a high-ranking financial clerk His life took a sharp turn in 41 A.D. once Claudius became the emperor as he exiled Seneca to the island of Corsica on the premises of supposed adultery with the emperor’s niece. During his exile, he wrote a letter to his mother consoling her during his exile. Eight years later, in another twist, Agrippina, mother of future emperor Nero and wife of Claudius secured permission for Seneca to return and for him to become her son’s tutor and adviser. Nero later became one of the most notorious and tyrannical emperors in the history of the Roman Empire raising even more questions about Seneca’s character. Yet Seneca’s death, in 65 A.D., came by the orders of Nero himself who thought Seneca was part of a plot against him",

        image:
        "3.jpg", },
    {
      post: "slave",
      description:
        "Epictetus was born nearly 2,000 years ago in Hierapolis (present-day Pamukkale in Turkey) as a slave in a wealthy household. Epaphroditus, his owner, gave him the permission to pursue liberal studies and it is how Epictetus discovered philosophy through the Stoic Musonius Rufus who became his teacher and mentor. Later, Epictetus obtained his freedom shortly after emperor Nero’s death and started teaching philosophy in Rome for nearly 25 years. This lasted until emperor Domitian famously banished all philosophers in Rome. Epictetus fled to Nicopolis in Greece where he founded a philosophy school and taught there until his death.",

      title: "EPICTETUS",

      image:
        "2.jpg",
    },
  ];
  return (
    <>
      <div id="importantthinkers" className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.title} className="border">
            <img
              src={post.image}
              className=" w-full rounded-md"
              alt=""
            />
            <div className="min-h-min p-3">
              <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                {post.title}
              </p>
              <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                {post.description}
              </p>
              <div className="mt-4 flex space-x-3 ">
                <div>
                  <p className="text-sm font-semibold leading-tight text-gray-900">
                    {post.post}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Importantthinker;
