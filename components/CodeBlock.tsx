import React, { useState } from 'react';
import { CopyIcon, CheckIcon, DocumentTextIcon } from './Icons';

interface CodeBlockProps {
  title: string;
  code: string;
  language: 'html' | 'css';
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ title, code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-gray-900/80 rounded-lg border border-gray-700">
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-700">
        <p className="text-sm font-medium text-gray-200">{title}</p>
        <div className="flex items-center space-x-2">
            <button
                className="text-xs text-gray-400 hover:text-gray-100 flex items-center space-x-1"
                disabled
            >
                <DocumentTextIcon className="h-4 w-4" />
                <span>Select all</span>
            </button>
            <button
                onClick={handleCopy}
                className="text-xs font-medium flex items-center space-x-1 px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
            >
                {copied ? <CheckIcon className="h-4 w-4 text-green-400" /> : <CopyIcon className="h-4 w-4 text-gray-400" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
        </div>
      </div>
      <div className="p-4">
        <textarea
          readOnly
          value={code}
          className="w-full h-32 p-2 font-mono text-xs text-gray-300 bg-gray-800 border border-gray-700 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
          spellCheck="false"
        />
      </div>
    </div>
  );
};