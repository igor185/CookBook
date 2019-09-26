import io from 'socket.io-client';

class SocketService {
    private static callbacks: any = [];

    static on(name: string, callback: (data: any) => any) {
        SocketService._socket.on(name, callback);
        this.callbacks.push(callback)
    }

    static added(callback: (data: any) => any){
        return SocketService.callbacks.indexOf(callback) !== -1
    }

    static emit(name: string, data: any) {
        SocketService._socket.emit(name, data);
    }

    static join(room: string) {
        SocketService._socket.emit('createRoom', room);
    }

    static leave(room: string) {
        SocketService._socket.emit('leaveRoom', room);
    }

    static off(name: string, callback: (data: any) => any) {
        SocketService._socket.off(name, callback);
    }

    private static _socket: any;

    constructor() {
        this._initSocket();
    }

    private _initSocket() {
        if (!SocketService._socket) {
            const url = window.location.pathname.indexOf('localhost') === -1 ? window.location.pathname : 'http://localhost:5000'
            SocketService._socket = io(url);
            if (SocketService._socket) {
                SocketService._socket.on('connect', () => {
                    console.log('socket connected')
                });
            }
        }
    }
}

export default SocketService;