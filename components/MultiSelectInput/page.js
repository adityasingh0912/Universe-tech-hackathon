import React, { useState, useEffect } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { Select } from '@mantine/core';

async function fetchItems() {
  const response = await fetch('/api/items');
  return response.json();
}

async function createItem(name) {
  const response = await fetch('/api/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });
  return response.json();
}

export default function MultiSelectInput() {
  const queryClient = useQueryClient();
  const { data: items } = useQuery('items', fetchItems);

  const [selectedItems, setSelectedItems] = useState([]);

  const mutation = useMutation(createItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('items');
    },
  });

  const handleChange = (value) => {
    setSelectedItems(value);
  };

  const handleCreate = async (value) => {
    mutation.mutate(value);
  };

  return (
    <Select
      data={items?.map((item) => ({ value: item.id, label: item.name }))}
      value={selectedItems}
      onChange={handleChange}
      searchable
      creatable
      onCreate={handleCreate}
      placeholder="Select or create items..."
    />
  );
}
