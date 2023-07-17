const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const contactsPath = path.join(__dirname, "/db/contacts.json");
console.log(contactsPath);

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath);
    const contactList = JSON.parse(contacts);
    // console.log(contactList);
    return contactList;
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
  try {
    const contacts = JSON.parse(await fs.readFile(contactsPath));
    const findContactById = contacts.filter(
      (contact) => String(contact.id) === contactId
    );

    if (!findContactById) {
      return null;
    }
    // console.log(findContactById);
    return findContactById;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = JSON.parse(await fs.readFile(contactsPath));
    const contactIndex = contacts.findIndex(
      (contact) => contact.id === contactId
    );
    if (contactIndex === -1) {
      return null;
    }
    const removedContact = contacts.splice(contactIndex, 1)[0];
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return removedContact;
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = JSON.parse(await fs.readFile(contactsPath));

    const newContact = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
    };

    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts));

    return newContact;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
