/** Building blocks for the prose pages and knowledge base articles. */
export type ContentBlock =
  | { kind: 'heading'; level: 2 | 3; text: string }
  | { kind: 'paragraph'; text: string; variant?: 'body' | 'lead' }
  | { kind: 'list'; items: readonly string[] }
  | { kind: 'steps'; items: readonly string[] }
  | {
      kind: 'definitions';
      items: readonly { term: string; description: string }[];
    }
  | {
      kind: 'table';
      columns: readonly string[];
      rows: readonly (readonly string[])[];
    }
  | { kind: 'callout'; title: string; text: string }
  | { kind: 'link'; label: string; href: string };
