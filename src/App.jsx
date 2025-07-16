// App.jsx
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route
} from "react-router-dom";

// مكوّن التخطيط الأساسي
function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}

// إنشاء الراوتر مع جميع الصفحات
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<h3>NOT FOUND</h3>} /> {/* صفحة 404 */}
    </Route>
  )
);  

// التطبيق الرئيسي
function App() {
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
