
import Feed from'@/components/Feed';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Save & Manage
        <br className="max-md:hidden"/>
        <span className="orange_gradient 
        text_center">YOur PasSwords</span>
      </h1>
      <p className="desc text-center">
        Password Manager is custom made Application to save and manage the Passwords 
      </p>

      <Feed/>
    </section>
  );
}
