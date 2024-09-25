import { Button } from "@mui/material";

type Props = {
  primary?: boolean;
  secondary?: boolean;
  children?: string | JSX.Element;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export function CustomButton({ primary, secondary, children, type = "button", onClick }: Props) {
  return (
    <Button type={type} onClick={onClick} sx={{
      color: primary ? '#FFFFFF' : secondary ? '#D9D9D9' : undefined,
      bgcolor: primary ? '#8875FF' : undefined,
      height: '48px'
    }}>
      {children}
    </Button>
  );
}
