

function Leadboard({ leaders }) {
    return (
      <div>
        {leaders.map((lead, index) => (
          <div key={index}>
            <a href={`http://www.codewars.com/users/${lead}`}>{lead}</a>
          </div>
        ))}
      </div>
    );
  }
export default Leadboard;