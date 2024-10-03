// import Challenge from "./components/Routing/Challenge";
// import SampleMenu from "./SampleMenu";
import "./App.css";
// import MyComponent from "../src/components/Routing/Interceptors/MyComponent.js";
import MyInterceptor from "./components/Routing/Interceptors/MyInterceptor.js";

function App() {
  return (
    <div>
      {/* <SampleMenu /> */}
      {/* <Challenge /> */}
      {/* <MyComponent /> */}
      <MyInterceptor />
    </div>
  );
}

export default App;
