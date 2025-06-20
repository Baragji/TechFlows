'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  duration?: number;
}

interface NotificationComponentProps {
  notification: Notification;
  onClose: (id: string) => void;
}

const NotificationComponent: React.FC<NotificationComponentProps> = ({ notification, onClose }) => {
  const getBackgroundColor = () => {
    switch (notification.type) {
      case 'success':
        return 'bg-secondary';
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-accent';
      case 'info':
      default:
        return 'bg-primary';
    }
  };

  return (
    <div
      className={`fixed top-24 right-4 z-50 max-w-sm w-full ${getBackgroundColor()} text-white rounded-lg shadow-custom transform transition-all duration-300 animate-slide-in-right`}
    >
      <div className="flex items-center justify-between p-4">
        <span className="text-sm font-medium">{notification.message}</span>
        <button
          onClick={() => onClose(notification.id)}
          className="ml-4 text-white hover:text-text-light focus:outline-none focus:text-text-light transition-colors"
          aria-label="Luk notifikation"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const useNotification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const idCounter = useRef(0);

  const showNotification = useCallback(
    (message: string, type: NotificationType = 'info', duration: number = 5000) => {
      const id = `notification-${++idCounter.current}`;
      const notification: Notification = { id, message, type, duration };

      setNotifications((prev) => [...prev, notification]);

      // Auto remove after duration
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, duration);

      return id;
    },
    []
  );

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const clearAllNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setPortalContainer(document.body); // Safe in useEffect - client-only
    }
  }, []);

  const NotificationContainer = useCallback(() => {
    if (typeof window === 'undefined' || notifications.length === 0 || !portalContainer) {return null;}

    return createPortal(
      <div className="fixed top-0 right-0 z-50 p-4 space-y-2">
        {notifications.map((notification, index) => (
          <div
            key={notification.id}
            style={{ top: `${100 + index * 80}px` }}
            className="absolute right-4"
          >
            <NotificationComponent notification={notification} onClose={removeNotification} />
          </div>
        ))}
      </div>,
      portalContainer
    );
  }, [notifications, removeNotification, portalContainer]);

  return {
    showNotification,
    removeNotification,
    clearAllNotifications,
    NotificationContainer,
    notifications,
  };
};

export default useNotification;
