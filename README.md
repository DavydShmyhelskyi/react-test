# 📒 Address Book (React)

## Використані патерни та підходи

- **List Rendering (map):** список контактів формується через `contacts.map(...)`, кожен елемент має унікальний `key` (`id`).
- **Lifting State Up:** стан `contacts` і `editingId` зберігається у контейнерному компоненті `AddressBook`, а дочірні компоненти отримують дії через `props`.
- **Controlled Components:** усі поля форми керуються через `state` (`value` + `onChange`).
- **Callback Props:** функції `onAdd`, `onSave`, `onDelete` передаються у компоненти як зворотні виклики.
- **Keyed Lists:** використання стабільного `id` (наприклад, `Date.now()` або UUID) для `key` у списку.
- **Local State per Item:** кожен контакт має власний локальний стан для редагування — зміни застосовуються лише після натискання **Save**.
- **Minimal Styling:** логіка рендеру відокремлена від стилів.

---

### 🔶 Діаграма структури
![Diagram](https://github.com/DavydShmyhelskyi/react-test/blob/main/test.drawio.png)

### Link
```
https://react-test-gules-ten.vercel.app/
```
