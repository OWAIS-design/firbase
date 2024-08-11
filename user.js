
import { storage, ref, uploadBytes, getDownloadURL, db, doc, setDoc } from "./firbase.js";

const items = [];
const itemsContainer = document.getElementById('itemsContainer');
const itemForm = document.getElementById('itemForm');

itemForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('itemName').value;
    const imageFile = document.getElementById('itemImage').files[0];

    if (name && imageFile) {
        try {
            const storageRef = ref(storage, `images/${imageFile.name}`);
            await uploadBytes(storageRef, imageFile);
            const imageUrl = await getDownloadURL(storageRef);

            const newItem = {
                id: Date.now(),
                name: name,
                image: imageUrl
            };

            items.push(newItem);
            await saveItemToFirestore(newItem);
            displayItems();
            itemForm.reset();
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Failed to upload image. Please try again.');
        }
    }
});

async function saveItemToFirestore(item) {
    const docRef = doc(db, 'items', item.id.toString());
    await setDoc(docRef, item);
}

function displayItems() {
    itemsContainer.innerHTML = '';
    items.forEach(item => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}"/>
            <h3>${item.name}</h3>
            <button onclick="deleteItem(${item.id})">Delete</button>
        `;
        itemsContainer.appendChild(cardDiv);
    });
}



