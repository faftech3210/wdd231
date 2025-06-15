document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("myButton");
    const closeButton = document.getElementById("closeButton");
    const menu = document.querySelector(".menulinks");

    menuButton.addEventListener("click", () => {
        menu.classList.add("show"); // Show menu
        menuButton.style.display = "none"; // Hide menu button
        closeButton.style.display = "block"; // Show close button
    });

    closeButton.addEventListener("click", () => {
        menu.classList.remove("show"); // Hide menu
        closeButton.style.display = "none"; // Hide close button
        menuButton.style.display = "block"; // Show menu button
    });
  // 📚 Book Data
  const books = [
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      genre: "Fantasy",
      rating: 5,
      review: "A beautifully written fantasy that weaves magic, music, and myth into an epic tale.",
      reviewed_by: "Naomi S.",
      image: "images/f10.webp"
    },
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      genre: "Fantasy",
      rating: 5,
      review: "A beautifully written fantasy that weaves magic, music, and myth into an epic tale.",
      reviewed_by: "Naomi S.",
      image: "images/f9.webp"
    },
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      genre: "Fantasy",
      rating: 5,
      review: "A beautifully written fantasy that weaves magic, music, and myth into an epic tale.",
      reviewed_by: "Naomi S.",
      image: "images/f8.webp"
    },
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      genre: "Fantasy",
      rating: 5,
      review: "A beautifully written fantasy that weaves magic, music, and myth into an epic tale.",
      reviewed_by: "Naomi S.",
      image: "images/f1.jpg"
    },
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      genre: "Fantasy",
      rating: 5,
      review: "A beautifully written fantasy that weaves magic, music, and myth into an epic tale.",
      reviewed_by: "Naomi S.",
      image: "images/f2.jpg"
    },
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      genre: "Fantasy",
      rating: 5,
      review: "A beautifully written fantasy that weaves magic, music, and myth into an epic tale.",
      reviewed_by: "Naomi S.",
      image: "images/f3.jpg"
    },
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      genre: "Fantasy",
      rating: 5,
      review: "A beautifully written fantasy that weaves magic, music, and myth into an epic tale.",
      reviewed_by: "Naomi S.",
      image: "images/f4.jpeg"
    },
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      genre: "Fantasy",
      rating: 5,
      review: "A beautifully written fantasy that weaves magic, music, and myth into an epic tale.",
      reviewed_by: "Naomi S.",
      image: "images/f5.jpg"
    },
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      genre: "Fantasy",
      rating: 5,
      review: "A beautifully written fantasy that weaves magic, music, and myth into an epic tale.",
      reviewed_by: "Naomi S.",
      image: "images/f6.jpg"
    },
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      genre: "Fantasy",
      rating: 5,
      review: "A beautifully written fantasy that weaves magic, music, and myth into an epic tale.",
      reviewed_by: "Naomi S.",
      image: "images/f7.jpg"
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      genre: "Mystery",
      rating: 4,
      review: "A gripping thriller full of suspense, secrets, and dark family drama.",
      reviewed_by: "Nora Bell",
      image: "images/m4.webp"
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      genre: "Mystery",
      rating: 4,
      review: "A gripping thriller full of suspense, secrets, and dark family drama.",
      reviewed_by: "Nora Bell",
      image: "images/m0.webp"
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      genre: "Mystery",
      rating: 4,
      review: "A gripping thriller full of suspense, secrets, and dark family drama.",
      reviewed_by: "Nora Bell",
      image: "images/m2.webp"
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      genre: "Mystery",
      rating: 4,
      review: "A gripping thriller full of suspense, secrets, and dark family drama.",
      reviewed_by: "Nora Bell",
      image: "images/m3.webp"
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      genre: "Mystery",
      rating: 4,
      review: "A gripping thriller full of suspense, secrets, and dark family drama.",
      reviewed_by: "Nora Bell",
      image: "images/m5.webp"
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      genre: "Mystery",
      rating: 4,
      review: "A gripping thriller full of suspense, secrets, and dark family drama.",
      reviewed_by: "Nora Bell",
      image: "images/m6.webp"
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      genre: "Mystery",
      rating: 4,
      review: "A gripping thriller full of suspense, secrets, and dark family drama.",
      reviewed_by: "Nora Bell",
      image: "images/m7.webp"
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      genre: "Mystery",
      rating: 4,
      review: "A gripping thriller full of suspense, secrets, and dark family drama.",
      reviewed_by: "Nora Bell",
      image: "images/m8.webp"
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      genre: "Mystery",
      rating: 4,
      review: "A gripping thriller full of suspense, secrets, and dark family drama.",
      reviewed_by: "Nora Bell",
      image: "images/m9.webp"
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      genre: "Mystery",
      rating: 4,
      review: "A gripping thriller full of suspense, secrets, and dark family drama.",
      reviewed_by: "Nora Bell",
      image: "images/m1webp.jpg"
    },
    {
      title: "The Paper Garden",
      author: "Clara Livingston",
      genre: "Fiction",
      rating: 4,
      review: "A lyrical journey through memory and imagination—this novel is a quiet masterpiece.",
      reviewed_by: "Lisa Mendez",
      image: "images/fct8.webp"
    },
    {
      title: "The Paper Garden",
      author: "Clara Livingston",
      genre: "Fiction",
      rating: 4,
      review: "A lyrical journey through memory and imagination—this novel is a quiet masterpiece.",
      reviewed_by: "Lisa Mendez",
      image: "images/fct7.webp"
    },
    {
      title: "All the Seasons Between",
      author: "Eliot McKay",
      genre: "Fiction",
      rating: 5,
      review: "Rich in emotion and detail, this book will leave you breathless with every turn.",
      reviewed_by: "Akua Barton",
      image: "images/fct6.webp"
    },
    {
      title: "The Paper Garden",
      author: "Clara Livingston",
      genre: "Fiction",
      rating: 4,
      review: "A lyrical journey through memory and imagination—this novel is a quiet masterpiece.",
      reviewed_by: "Lisa Mendez",
      image: "images/fct5.webp"
    },
    {
      title: "All the Seasons Between",
      author: "Eliot McKay",
      genre: "Fiction",
      rating: 5,
      review: "Rich in emotion and detail, this book will leave you breathless with every turn.",
      reviewed_by: "Akua Barton",
      image: "images/fct4.webp"
    },
    {
      title: "The Paper Garden",
      author: "Clara Livingston",
      genre: "Fiction",
      rating: 4,
      review: "A lyrical journey through memory and imagination—this novel is a quiet masterpiece.",
      reviewed_by: "Lisa Mendez",
      image: "images/fct3.webp"
    },
    {
      title: "All the Seasons Between",
      author: "Eliot McKay",
      genre: "Fiction",
      rating: 5,
      review: "Rich in emotion and detail, this book will leave you breathless with every turn.",
      reviewed_by: "Akua Barton",
      image: "images/fct2.webp"
    },
    {
      title: "The Paper Garden",
      author: "Clara Livingston",
      genre: "Fiction",
      rating: 4,
      review: "A lyrical journey through memory and imagination—this novel is a quiet masterpiece.",
      reviewed_by: "Lisa Mendez",
      image: "images/fct1.webp"
    },
    {
      title: "All the Seasons Between",
      author: "Eliot McKay",
      genre: "Fiction",
      rating: 5,
      review: "Rich in emotion and detail, this book will leave you breathless with every turn.",
      reviewed_by: "Akua Barton",
      image: "images/fct.webp"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      rating: 5,
      review: "A thought-provoking exploration of human history and what makes us unique.",
      reviewed_by: "Jordan M.",
      image: "images/nf0.webp"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      rating: 5,
      review: "A thought-provoking exploration of human history and what makes us unique.",
      reviewed_by: "Jordan M.",
      image: "images/nf1.webp"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      rating: 5,
      review: "A thought-provoking exploration of human history and what makes us unique.",
      reviewed_by: "Jordan M.",
      image: "images/nf2.webp"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      rating: 5,
      review: "A thought-provoking exploration of human history and what makes us unique.",
      reviewed_by: "Jordan M.",
      image: "images/nf3.webp"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      rating: 5,
      review: "A thought-provoking exploration of human history and what makes us unique.",
      reviewed_by: "Jordan M.",
      image: "images/nf4.webp"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      rating: 5,
      review: "A thought-provoking exploration of human history and what makes us unique.",
      reviewed_by: "Jordan M.",
      image: "images/nf5.webp"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      rating: 5,
      review: "A thought-provoking exploration of human history and what makes us unique.",
      reviewed_by: "Jordan M.",
      image: "images/nf6.webp"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      rating: 5,
      review: "A thought-provoking exploration of human history and what makes us unique.",
      reviewed_by: "Jordan M.",
      image: "images/nf7.webp"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      rating: 5,
      review: "A thought-provoking exploration of human history and what makes us unique.",
      reviewed_by: "Jordan M.",
      image: "images/nf8.webp"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      rating: 5,
      review: "A thought-provoking exploration of human history and what makes us unique.",
      reviewed_by: "Jordan M.",
      image: "images/nf9.webp"
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      genre: "Sci-Fi",
      rating: 5,
      review: "A visionary classic that explores politics, ecology, and destiny in a desert world.",
      reviewed_by: "Orlando Cruz",
      image: "images/sf.webp"
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      genre: "Sci-Fi",
      rating: 5,
      review: "A visionary classic that explores politics, ecology, and destiny in a desert world.",
      reviewed_by: "Orlando Cruz",
      image: "images/sf1.webp"
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      genre: "Sci-Fi",
      rating: 5,
      review: "A visionary classic that explores politics, ecology, and destiny in a desert world.",
      reviewed_by: "Orlando Cruz",
      image: "images/sf2.webp"
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      genre: "Sci-Fi",
      rating: 5,
      review: "A visionary classic that explores politics, ecology, and destiny in a desert world.",
      reviewed_by: "Orlando Cruz",
      image: "images/sf3.webp"
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      genre: "Sci-Fi",
      rating: 5,
      review: "A visionary classic that explores politics, ecology, and destiny in a desert world.",
      reviewed_by: "Orlando Cruz",
      image: "images/sf4.webp"
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      genre: "Sci-Fi",
      rating: 5,
      review: "A visionary classic that explores politics, ecology, and destiny in a desert world.",
      reviewed_by: "Orlando Cruz",
      image: "images/sf5.webp"
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      genre: "Sci-Fi",
      rating: 5,
      review: "A visionary classic that explores politics, ecology, and destiny in a desert world.",
      reviewed_by: "Orlando Cruz",
      image: "images/sf6.webp"
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      genre: "Sci-Fi",
      rating: 5,
      review: "A visionary classic that explores politics, ecology, and destiny in a desert world.",
      reviewed_by: "Orlando Cruz",
      image: "images/sf7.webp"
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      genre: "Sci-Fi",
      rating: 5,
      review: "A visionary classic that explores politics, ecology, and destiny in a desert world.",
      reviewed_by: "Orlando Cruz",
      image: "images/sf8.webp"
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      genre: "Sci-Fi",
      rating: 5,
      review: "A visionary classic that explores politics, ecology, and destiny in a desert world.",
      reviewed_by: "Orlando Cruz",
      image: "images/sf9.webp"
    },
  ];

  const lastModified = document.getElementById("lastModified");
    lastModified.textContent = `Last Modification: ${document.lastModified}`;


  // 🧭 Filter DOM elements
  const filter = document.getElementById("genreFilter");
  const container = document.getElementById("bookContainer");

  function renderBooks(filteredBooks) {
    container.innerHTML = "";

    filteredBooks.forEach(book => {
      const card = document.createElement("div");
      card.className = "book-review-card";
      card.innerHTML = `
        <div class="book-details">
          <img src="${book.image}" alt="${book.title}" class="book-cover" />
          <span class="category">${book.genre.toUpperCase()}</span>
          <p class="author">by ${book.author}</p>
          <div class="stars">${"⭐".repeat(book.rating)}</div>
          <p class="review">${book.review}</p>
          <p class="reviewed-by">— Reviewed by <strong>${book.reviewed_by}</strong></p>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // 🔍 Initial display
  renderBooks(books);

  // 🎯 Genre filter
  filter.addEventListener("change", () => {
    const selected = filter.value;
    if (selected === "All") {
      renderBooks(books);
    } else {
      const filtered = books.filter(book => book.genre === selected);
      renderBooks(filtered);
    }
  });
});
