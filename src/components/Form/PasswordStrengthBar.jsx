const PasswordStrengthBar = ({ passwordStrength }) => {
  return (
    <div className="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">
      {[...Array(4)].map((_, index) => {
        let colorClass = 'bg-theme-21';
        // red

        if (passwordStrength > 1) {
          colorClass = 'bg-theme-15';
          // yellow
        }

        if (passwordStrength > 3) {
          colorClass = 'bg-theme-20';
          // green
        }

        return (
          <div
            key={index}
            className={`col-span-3 h-full rounded ${
              index < passwordStrength ? colorClass : 'bg-gray-200 dark:bg-dark-2'
            }`}
          ></div>
        );
      })}
    </div>
  );
};

export default PasswordStrengthBar;
