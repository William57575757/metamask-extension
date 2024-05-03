export const SNAP = 'SNAP' as const;

export type RawSnapNotification = {
  id: string;
  message: string;
  origin: string;
  createdDate: number;
  readDate?: number;
};

export type SnapNotification = {
  id: string;
  createdAt: string;
  isRead: boolean;
  type: typeof SNAP;
  data: {
    snapName: string;
    message: string;
    origin: string;
  };
};

export type SnapNotificationWithoutSnapName = Omit<SnapNotification, 'data'> & {
  data: Omit<SnapNotification['data'], 'snapName'>;
};
