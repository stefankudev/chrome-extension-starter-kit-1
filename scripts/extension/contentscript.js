async function prank() {
    const searchbox = document.querySelector('[title="Search"]');

    searchbox.value = "how can my feet smell if they don't have a nose?";
}

window.onload = prank();
