type InfoPartProps = {
  user: {
    name: string;
    age: number;
    illnesses: {
      name: string;
      description: string;
      percentage: number;
    }[];
  };
  changeIllness: (illness: string) => void;
};

const InfoPart = ({ user }: InfoPartProps) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <div>
        <h1>Info:</h1>
        <div>
          <h1>Idade: {user.age}</h1>
          <h1>Etc...</h1>
        </div>
      </div>
      <h1>Outros Diagnosticos</h1>
      <div>
        {user.illnesses.map((illness, index) => (
          <div key={index}>
            <h1>{illness.name}</h1>
            <h1>{illness.description}</h1>
            <h1>{illness.percentage}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoPart;
