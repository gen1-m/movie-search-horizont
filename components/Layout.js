import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* -------------- Layout component -------------- */
export default function Layout({ children }) {
    return (
        <>
            {/* Render the Navbar component */}
            <Navbar />

            <main>
                {/* Render the children components passed to the Layout component */}
                {children}
            </main>

            {/* Render the Footer component */}
            <Footer />
        </>
    );
};
