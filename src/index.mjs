import assert from 'node:assert/strict';
import { createEntityExtractor } from '@x12i/text-entities';

const extractor = createEntityExtractor({ profileId: 'validated-ascii-v1', types: ['EMAIL', 'CVE_ID'] });
const text = 'Contact ada@example.com about CVE-2024-12345.';
const result = extractor.extract({ documentId: 'doc-1', revision: '1', text });
assert(result);
console.log(JSON.stringify(result, null, 2));
