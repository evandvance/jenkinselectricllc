interface ApiResponse<T> {
  status: number;
  message: string;
  data?: T;
  error?: any;
}
