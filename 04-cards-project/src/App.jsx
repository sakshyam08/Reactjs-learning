import Card from "./components/card.jsx";

function App() {
  const companies = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    name: "Amazon",
    description: "A global e-commerce and technology company."
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    name: "Google",
    description: "A technology company specializing in search, cloud, and AI."
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    name: "LinkedIn",
    description: "A professional networking platform for careers and businesses."
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    name: "Apple",
    description: "A technology company known for iPhone, Mac, and other products."
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    name: "Microsoft",
    description: "A technology company focused on software, cloud, and computing."
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    name: "IBM",
    description: "A technology company providing enterprise computing and cloud solutions."
  },
  
  
];


return (
  <div className="cards-container">
    {companies.map(function (elem) {
      return (
        <Card
          key={elem.name}
          logo={elem.logo}
          Name={elem.name}
          des={elem.description}
        />
      );
    })}
  </div>
);
  
}

export default App;