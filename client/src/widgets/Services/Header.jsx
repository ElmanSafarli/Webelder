import { ServicesBg } from "../../shared";
const Header = () => {
  return (
    <div className="header">
      <svg
        width="100%"
        height="777"
        viewBox="0 0 1357 777"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip-path">
            <path
              d="M1357 19V758C1357 768.493 1348.49 777 1338 777L791.562 777C781.069 777 772.562 768.493 772.562 758V690.045C772.562 679.552 764.055 671.045 753.562 671.045H470.497C460.004 671.045 451.497 662.539 451.497 652.045V584.091C451.497 573.597 442.991 565.091 432.497 565.091H367.656C357.163 565.091 348.656 556.584 348.656 546.091V500.841C348.656 490.347 340.15 481.841 329.656 481.841H19C8.50659 481.841 0 473.334 0 462.841V19C0 8.50659 8.50661 0 19 0H1338C1348.49 0 1357 8.50661 1357 19Z"
              fill="#252525"
            />
          </clipPath>
        </defs>

        <image
          x="0"
          y="0"
          width="1357"
          height="777"
          href={ServicesBg}
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#clip-path)"
        />
      </svg>
    </div>
  );
};

export default Header;
