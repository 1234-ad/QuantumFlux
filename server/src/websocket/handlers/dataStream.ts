import { Server, Socket } from 'socket.io';
import { logger } from '../../utils/logger';

interface StreamData {
  streamId: string;
  data: any;
  timestamp: number;
}

export const handleDataStream = (io: Server, socket: Socket) => {
  // Subscribe to a data stream
  socket.on('stream:subscribe', async (streamId: string) => {
    try {
      socket.join(`stream:${streamId}`);
      logger.info(`Socket ${socket.id} subscribed to stream ${streamId}`);
      
      socket.emit('stream:subscribed', { streamId });
    } catch (error) {
      logger.error('Stream subscription error:', error);
      socket.emit('stream:error', { error: 'Failed to subscribe to stream' });
    }
  });

  // Unsubscribe from a data stream
  socket.on('stream:unsubscribe', (streamId: string) => {
    socket.leave(`stream:${streamId}`);
    logger.info(`Socket ${socket.id} unsubscribed from stream ${streamId}`);
    socket.emit('stream:unsubscribed', { streamId });
  });

  // Publish data to a stream (for authorized users)
  socket.on('stream:publish', async (data: StreamData) => {
    try {
      const { streamId, data: streamData, timestamp } = data;
      
      // Broadcast to all subscribers
      io.to(`stream:${streamId}`).emit('stream:data', {
        streamId,
        data: streamData,
        timestamp: timestamp || Date.now(),
      });
      
      logger.debug(`Data published to stream ${streamId}`);
    } catch (error) {
      logger.error('Stream publish error:', error);
      socket.emit('stream:error', { error: 'Failed to publish data' });
    }
  });
};