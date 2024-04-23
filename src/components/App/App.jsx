import Footer from "../Footer";
import ToastPlayground from "../ToastPlayground/ToastPlayground";
import ToastProvider from "../ToastProvider";

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  )
}

export default App;
