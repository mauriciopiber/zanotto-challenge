import '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    handleView: (id: string) => void;
    handleDel: (id: string) => void;
    handleEdit: (id: string) => void;
  }
}
