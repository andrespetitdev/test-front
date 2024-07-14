import { Button } from "../buttom/Button";
export const InfoMenu = () => {
  const names = {
    Currency: 0,
    Items: 1,
    Accounts: 2,
    Services: 3,
    Swap: 4,
    Sell: 5,
  };
  const ts = {
    Usd: 0,
    Cart: 1,
  };
  const opts = Object.keys(ts);
  const selectOptions = Object.keys(names);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <div>CHICKS GOLD</div>
          <span style={{ marginLeft: 20, height: "auto" }}>|</span>

          {selectOptions.map((option, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                marginLeft: 40,
              }}
            >
              <label htmlFor={option}>{option}</label>
              <select
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                }}
              ></select>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 20, marginRight: 40 }}>
          {opts.map((el, index) => (
            <div key={index}>
              <label>{el}</label>
              <select
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                }}
              ></select>
            </div>
          ))}
          <Button />
        </div>
      </div>
    </>
  );
};
