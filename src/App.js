import "./App.css";
import LoginForm from "./components/forms/LoginForm";
import "./styles/output.css";

function App() {
  return (
    <div className="bg-gray-100 p-20 h-screen flex justify-center">
      {/* <div className="bg-white-900 p-20 h-screen flex justify-center items-start flex-col">
        <h1 className="text-5xl text-black">Hello Tailwind 👋</h1>
        <p className="text-gray-700 mt-5 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo
          fugiat eveniet tempora, atque alias earum ullam inventore itaque
          sapiente iste?
        </p>
        <button class="p-4 bg-gray-900 rounded font-bold text-white mt-5 shadow-lg hover:bg-gray-600">
          Hello 🚀
        </button>
      </div> */}
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
