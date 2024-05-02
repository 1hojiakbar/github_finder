import { Container } from "../style";

function Profile({ users }) {
  if (!users) return null;

  return (
    <Container>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.login} -
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              Profil
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Profile;
