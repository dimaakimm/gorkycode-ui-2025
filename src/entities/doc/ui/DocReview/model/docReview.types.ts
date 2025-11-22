export interface DocReviewProps {
  isLoading: boolean;
  title: string;
  onClick: () => void;
  format: string;
  infoUrl?: string;
  downloadUrl?: string;
  isActive?: boolean;
}