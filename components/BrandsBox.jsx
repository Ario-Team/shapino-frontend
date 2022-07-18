const BrandsBox = ({
  backgroundColor,
  backgroundImage,
  children,
  className,
}) => {
  return (
    <div
      className={`${
        !backgroundImage ? backgroundColor : backgroundColor ? "" : ""
      } relative bg-cover bg-center min-h-52 max-h-56 rounded-md ${className} max-w-5xl`}
      style={{
        backgroundImage: backgroundImage ?? null,
      }}
    >
      {children}
    </div>
  );
};

BrandsBox.defaultProps = {
  backgroundColor: "bg-gray-600",
};

export default BrandsBox;
