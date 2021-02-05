import React from "react";
import Styles from "./Mentors.module.css";
import { useHistory, useParams, Redirect } from "react-router-dom";
import axios from "axios";
// let data = [
//   {
//     id: "m1",
//     avatar:
//       "https://ph-files.imgix.net/c6ae7a2c-9fac-43c1-a1b6-544c01228f83.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Armagan Amcalar",
//     position: "Entrepreneur, CTO & Mentor",
//     para1:
//       "Armagan is a leader and an entrepreneur with years of hands-on experience founding and leading multiple startups and innovative products. He led the creation of several innovative products that millions of people still use daily. Armagan thrives creating scalable engineering environments and processes with strong vision and solid fundamentals.",
//     para2:
//       "Armagan serves as a CTO and a technology mentor for several startups. He has also taught hundreds of people software engineering at every level. Armagan can help you if you are an individual contributor and would like to grow your career in technology, a team and are looking for a direction in goal setting, or are dealing with architectural decisions and challenges, or are designing a roadmap for your product's future and need expert opinion on technical direction.",
//     para3: "",
//   },
//   {
//     id: "m2",
//     avatar:
//       "https://ph-files.imgix.net/77d91585-2cd1-4530-8343-069cd525789d.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Sarah Evans",
//     position: "Founder & CEO, Sevans Strategy",
//     para1:
//       "Sarah Evans, founder of Sevans Strategy and Sevans Digital PR, is a digital strategist and global brand correspondent, who works with companies worldwide to create and improve their social and digital strategies, advising on branding, marketing, advertising, and public relations.",
//     para2: "",
//     para3: "",
//   },
//   {
//     id: "m3",
//     avatar:
//       "https://ph-files.imgix.net/9680aeb1-7535-4efe-ada2-f7b783e4c19e.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Janine Sickmeyer",
//     position:
//       "Tech Founder (acq ‘19) & Angel Investor in Underrepresented Founders",
//     para1:
//       "As a SaaS founder, I built, scaled, and sold my legal tech startup in 4 years with no outside capital.",
//     para2:
//       "Now I'm angel investing in underrepresented founders and enjoy talking with founders about startup marketing, SaaS product development, business strategy, bootstrapping, pitch deck review, and more! I'll share any resources, advice, or connections that might be helpful for you to grow your startup. Rooting for you and your venture! 🙌",
//     para3: "",
//   },
//   {
//     id: "m4",
//     avatar:
//       "https://ph-files.imgix.net/73ef9cbf-0d57-40a7-a71b-99a141f26d6e.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Nichole Elizabeth DeMeré",
//     position:
//       "Experiments, language-market fit, communities, product marketing",
//     para1:
//       "I help determine and run qualitative and quantitative experiments for early-stage B2B SaaS companies to help inform go-to-market and launch strategies and tactics with data, for both new and existing products and features. (This goes well beyond A/B and multivariate testing.)",
//     para2:
//       "I especially help with value proposition design and language-market fit. I build, grow, and engage communities. I work from the perspective of Customer Success or CX-led growth to help create WoM, brand advocacy, network effects.",
//     para3:
//       "I don't do paid marketing or advertising. I do things that don't scale. I help create genuine relationships. I won't help you with short-term wins. I don't do aggressive growth hacking type things. I play the long game.",
//   },
//   {
//     id: "m5",
//     avatar:
//       "https://ph-files.imgix.net/44528690-5459-45c1-ad7f-9e5cfd10ee35.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Matt Navarra",
//     position: "Need Top-Tier Social Media Advice + Consultancy? Lets talk",
//     para1:
//       "Matt Navarra is a well-known social media industry commentator and business consultant. His previous clients include BBC, ITV, United Nations, International Red Cross, Sainsbury's, ITN, Pinterest, and more.",
//     para2:
//       "Earlier in his career, Matt was Director of Social Media at global technology news and events company The Next Web. Matt was also a digital communications lead for the UK Government working on projects for the Cabinet Office, Government Digital Service, 10 Downing Street.",
//     para3:
//       "Matt also produces and hosts his own weekly podcast called 'Geekout with Matt Navarra', sponsored by Pinterest. On Facebook, Matt is the founder of the popular 'The Social Media Geekout' group for social media professionals.",
//   },
//   {
//     id: "m6",
//     avatar:
//       "https://ph-files.imgix.net/4e902b93-629c-4a1b-be62-5d8a052eb863.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Mubashar Iqbal",
//     position: "I design, I develop, I make",
//     para1:
//       "My name is Mubashar Iqbal, but you can call me Mubs. I was ProductHunt's maker of the year in 2016.",
//     para2:
//       "I've been creating software for over 20 years, and I love helping people, plan, make and ship their product ideas",
//     para3: "",
//   },
//   {
//     id: "m7",
//     avatar:
//       "https://ph-files.imgix.net/41412cd8-b1d2-4835-9b3a-3a6836f5660f.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Anne-Laure",
//     position: "Founder, Ness Labs",
//     para1:
//       "Anne-Laure is an entrepreneur, writer, and mindful productivity expert. Ex-Google and Entrepreneur First, she now studies neuroscience at King's College London and writes a weekly newsletter for thousands of curious minds. Anne-Laure can help you define your priorities, get stuff done, and increase your creativity.",
//     para2: "",
//     para3: "",
//   },
//   {
//     id: "m8",
//     avatar:
//       "https://ph-files.imgix.net/64e1f9df-ec5d-4b1f-9c9a-48f15962d61d.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Brennan McEachran",
//     position: "Founder of SoapBoxHQ",
//     para1:
//       "Hi! I'm Brennan, co-founder of SoapBoxHQ. I'd love to jump on a call and help with anything related to SaaS / B2B / PLG & Human Management.",
//     para2:
//       "Looking to giveback here, so please donate what you can (let's say $20) to a charity of your choice or https://code.org/help",
//     para3: "",
//   },
//   {
//     id: "m9",
//     avatar:
//       "https://ph-files.imgix.net/063d0f0d-cbf2-40a7-86b2-a1f3d3ac6d8e.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Lolita Taub",
//     position: "Latinx operator and investor pushing for diversity in tech.",
//     para1:
//       "With over 14 yrs in tech, +$50M in sales, and 37 investments under my belt, I can help you with: 💰 sales tactics, 🎙 pitch decks, 💥 fundraising planning, 🚀 business strategy, and 💼 career coaching.",
//     para2: "",
//     para3: "",
//   },
//   {
//     id: "m10",
//     avatar:
//       "https://ph-files.imgix.net/53589502-96e3-46c6-a3f2-a27b3dfc863e.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Ryan Hoover",
//     position: "Founder of Product Hunt. Investor at Weekend Fund.",
//     para1:
//       "Hi! 👋🏼 I love chatting with ambitious entrepreneurs, makers, and professionals. Book some time with me if you'd like to chat about product, community building, or other topics that I might be able to help with. FYI, profits from this call will be donated to charities on Every.org (see https://www.every.org/@rrhoover)",
//     para2: "",
//     para3: "",
//   },
//   {
//     id: "m11",
//     avatar:
//       "https://ph-files.imgix.net/6316057f-7074-4761-8fe8-df8b18ef87ef.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Hiten Shah",
//     position: "Co-founder & CEO of FYI",
//     para1:
//       "Hiten is Co-founder & CEO of FYI. He’s been building software companies since 2005 and previously started Crazy Egg and KISSmetrics. He is well known for sharing his knowledge about building software businesses with other founders and executives. He has personally invested and advised companies such as Automattic, Buffer, Clearbit, Envoy, Front, LinkedIn and over 120 others.",
//     para2: "",
//     para3: "",
//   },
//   {
//     id: "m12",
//     avatar:
//       "https://ph-files.imgix.net/183ab539-573a-4349-a285-e74b347a4bf7.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Nadav Dakner",
//     position: "Startup Angel Investor and Marketer",
//     para1:
//       "Nadav is an angel investor in SaaS companies and the CEO of InboundJunction, a Tel-Aviv based marketing group for startups and established businesses that worked with over 500 companies on PR, content marketing, brand reputation, social promotions and SEO.",
//     para2:
//       "With over 12 years of marketing and entrepreneurship experience, he is interested in finding angel investing opportunities and working with great companies to drastically increase their online presence and revenues.",
//     para3: "",
//   },
//   {
//     id: "m13",
//     avatar:
//       "https://ph-files.imgix.net/eed2bb2a-92cb-4471-a150-17b3c146dfb2.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Nir Eyal",
//     position: "Author of Hooked and Indistractable",
//     para1:
//       "Nir Eyal is a former Lecturer at Stanford and is the bestselling author of Hooked: How to Build Habit-Forming Products and Indistractable: How to Control Your Attention and Choose Your Life. Indistractable won numerous honors and was named one of the Best Books of the Year by Amazon.",
//     para2:
//       "Nir is also an active angel investor with several billion dollar exists and is the former CEO of two tech companies. He blogs about psychology, technology, and business at NirAndFar.com",
//     para3: "",
//   },
//   {
//     id: "m14",
//     avatar:
//       "https://ph-files.imgix.net/4bee963e-64b4-429d-8ea3-3dbf9ee1cb3c.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Kevin Williiam David",
//     position:
//       "Top Hunter on Product Hunt. Prev: Director of Community at AngelList",
//     para1:
//       "Hey there! 👋 I was one of the first 100 users of Product Hunt right from the newsletter days before ProductHunt.com came into existence.",
//     para2:
//       "Since 2013, have helped over 2000 companies launch on Product Hunt. I help founders with launch strategies, community building, marketing, growth, product and UX advice.",
//     para3:
//       "If you have questions or want to know the best Product Hunt launch strategies. Let’s chat.",
//   },
//   {
//     id: "m15",
//     avatar:
//       "https://ph-files.imgix.net/da9c502c-fd64-4e27-abd9-e00546f698c2.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Cherie Hu",
//     position: "Music-tech writer and researcher",
//     para1:
//       "Hi! I'm a writer and researcher specializing in the intersection of music, technology and economics.",
//     para2:
//       "I run Water & Music, an industry-leading newsletter and membership community focused on music-tech innovation, and have also written hundreds of articles on the topic for the likes of Billboard, Forbes, NPR Music, Music Business Worldwide, Pitchfork and Rolling Stone. I'm currently working on a book for Bloomsbury about the parallels between independent music careers and tech entrepreneurship.",
//     para3:
//       "I can help you understand the latest trends in the music-tech market, critique your media/investor pitch deck and advise on strategies for growing paid newsletters and media memberships.",
//   },
//   {
//     id: "m16",
//     avatar:
//       "https://ph-files.imgix.net/e69751f8-967b-4a6a-9443-ee16926966fd.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Pablo Stanley",
//     position: "Designer & Founder",
//     para1:
//       "I'm a lead designer who is looking to help you grow and achieve your goals as a creative. I'm here to be your coach, helping you develop your skills, so you can go into the ring and become a design champion. If you need guidance with your portfolio, feedback on a project you're struggling with, advice on how to gain confidence as a designer, let's jam on it!",
//     para2:
//       "I'm currently the CEO and designer at Blush and I've worked as a staff designer at Lyft, Lead at InVision, and founding designer at Carbon Health too.",
//     para3: "Let's work together!",
//   },
//   {
//     id: "m17",
//     avatar:
//       "https://ph-files.imgix.net/078126f3-8ed1-42fc-8ab4-d2a57e09930b.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Dawn Dickson",
//     position: "Serial entrepreneur (4X), fundraising strategist",
//     para1:
//       "Dawn W. Dickson is a serial entrepreneur and inventor with over 19 years of experience in marketing and business development. Her most recent ventures Flat Out of Heels and PopCom.",
//     para2:
//       "Dawn has received numerous awards and accolades and featured in countless media outlets including Forbes, INC, Black Enterprise, Fortune, Fast Company, Venture Beat, Huff Post, Essence Magazine, and more. Dawn has an expertise in raising traditional and non-traditional business capital, having raised millions of dollars for her ventures since 2001. In 2019, Dawn became the first female founder globally to raise a secure token offering (STO) of over $1M using equity crowdfunding under Reg CF the JOBS Act. In 2020 she led PopCom to raise another oversubscribed Reg CF round of $1.05M, bringing her equity crowdfunding total to $2.3M.",
//     para3:
//       "Dawn is a seasoned professional speaker, advisor and angel investor. She continues to be recognized as one of the nation’s top retail tech entrepreneurs.",
//   },
//   {
//     id: "m18",
//     avatar:
//       "https://ph-files.imgix.net/7bc75bda-75b7-4650-8567-f4bbbbc150fd.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Tristan Pollock",
//     position: "2X Founder, VC, Community Movement Builder",
//     para1:
//       "I've built and sold 2 startups. Invested $30M as a VC. And I owe the value I've created to growing communities and building network movements around products, customers, and thought leadership",
//     para2: "",
//     para3: "",
//   },
//   {
//     id: "m19",
//     avatar:
//       "https://ph-files.imgix.net/3d8badb0-1a1d-461f-b359-9416e62b5361.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Justin Mitchell",
//     position:
//       "Product Designer & 3x CEO. Let's talk launch strategy and how to raise VC",
//     para1:
//       "My work has been featured on The Verge, TechCrunch, Wall Street Journal, and Forbes. If you're working on a startup and need advice on your tech stack or how to raise from VCs, let's talk!",
//     para2: "",
//     para3: "",
//   },
//   {
//     id: "m20",
//     avatar:
//       "https://ph-files.imgix.net/e73868e2-37f7-4aa7-8ee2-11d5711bfad6.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Chris Messina",
//     position: "Inventor of the hashtag and top hunter on Product Hunt",
//     para1:
//       "With over 15 years in the trenches of Silicon Valley (Google, Uber, Y Combinator), I can help you formulate better strategic decisions in product design, social, community and growth.",
//     para2:
//       "🏆 I'm the top hunter on Product Hunt, having hunted over 2300 products and counting! Want to learn the best practices for launching on Product Hunt? Let's talk.",
//     para3: "",
//   },
//   {
//     id: "m21",
//     avatar:
//       "https://ph-files.imgix.net/b453d5bf-522a-4dcc-91ef-25acb69e1dac.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=150&h=150&fit=max",
//     title: "Caro Griffin",
//     position: "Senior operations leader helping startups go remote & scale",
//     para1:
//       "Howdy! My name and is Caro and I work with startups go remote and scale.",
//     para2:
//       "I do this by helping them grow their teams and create processes that deliver a return. (Versus just creating more overhead!) What got you started isn’t what will take your business to the next level - that’s where I come in!",
//     para3:
//       "I can help you streamline your processes and sustainably grow your team so you can reach your revenue goals. If you’ve found your product/market fit but don’t know how to clear that next hurdle, I can help.",
//   },
// ];

const Mentors = () => {
  const [data, setData] = React.useState(null);
  const history = useHistory();
  const { appId } = useParams();
  React.useEffect(() => {
    getlist();
  }, [data]);
  const getlist = async () => {
    try {
      const res = await axios.get("https://json-server-mocker-masai-gopi.herokuapp.com/posts");

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const bookacall = (id)=>{
    history.push(`/mentors/${id}`)
  }
  return (
    <div className={Styles.mentors_outerbox}>
      <h1 className={Styles.mentors_h1}>Product Hunt Mentors</h1>
      <p className={Styles.mentors_p}>
        Product Hunt Mentors allows you to book 1 to 1 meetings with industry
        experts on a range of topics including product building, social media,
        PR, design, engineering and more.
      </p>

      <p  className={Styles.mentors_p}>
        How it works: You can read more about each mentor in their short bios,
        then click “Book a Call” to select a time that suits you from their
        online calendars. Each mentor sets their own fee in accordance with
        their experiences. (Full disclaimer: Product Hunt takes a percentage).
      </p>

      <p  className={Styles.mentors_p}>
        If you’d like to become a mentor yourself, please apply here. Or if
        you’d like to book a session with an expert mentor, you can scroll our
        list below. More mentors will we added over time. If you have any
        questions, please check out our FAQ.
      </p>
      <div>
        {data!==null && data.map(({ id, avatar, title, position, para1, para2, para3 }) => (
          <>
            <div className={Styles.datadiv} key={id}>
              <div>
                <div className={Styles.img}>
                  <img src={avatar} alt="img" />
                </div>
              </div>
              <div className={Styles.datadiv_2}>
                <div className={Styles.title}>{title}</div>
                <div className={Styles.position}>{position}</div>
                {para1 !== "" && <p className={Styles.para}>{para1}</p>}
                {para2 !== "" && <p className={Styles.para}>{para2}</p>}
                {para3 !== "" && <p className={Styles.para}>{para3}</p>}
                <button className={Styles.button} onClick={() => bookacall(id)}>BOOK A CALL</button>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className={Styles.startbuttondiv}>
        <button className={Styles.startbutton}>
          INTERESTED IN BEING A MENTOR?GET STARTED HERE
        </button>
      </div>
    </div>
  );
};

export default Mentors;
