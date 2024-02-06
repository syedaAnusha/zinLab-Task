import "@/styles/globals.css";
import NavigationContext from "../components/Smaller Screen Components/Context/NavigationContext";

export default function App({ Component, pageProps }) {
  const navigateToHeaderMobile = () => {
    console.log("Navigating 2 back to HeaderMobile...");
    // Add your navigation logic here
  };
  return (
    <NavigationContext.Provider value={{ navigateToHeaderMobile }}>
      <Component {...pageProps} />
    </NavigationContext.Provider>
  );
}
