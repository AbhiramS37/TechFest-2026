const images = [
    { title: "Innovation", category: "Technology", color: "gallery-one" },
    { title: "Competition", category: "Events", color: "gallery-two" },
    { title: "Collaboration", category: "Community", color: "gallery-three" },
    { title: "Creativity", category: "Projects", color: "gallery-four" },
    { title: "Learning", category: "Workshops", color: "gallery-five" },
    { title: "Celebration", category: "Memories", color: "gallery-six" }
];

function Gallery() {
    return (
        <main className="section gallery-page">
            <div className="form-heading">
                <p className="eyebrow">MOMENTS THAT MATTER</p>
                <h1>Our <span>Gallery</span></h1>
                <p>A glimpse into the world of TechFest.</p>
            </div>

            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div className={`gallery-card ${image.color}`} key={index}>
                        <div>
                            <p>{image.category}</p>
                            <h2>{image.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Gallery;