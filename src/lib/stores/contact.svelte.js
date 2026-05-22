const labels = {
  beauty: 'Beauty & Wellness',
  chef: 'Private Chef & Catering',
  cleaning: 'Home Cleaning',
  gift: 'Gift voucher'
};

export const contactState = $state({
  open: false,
  prefilled: null
});

export function openContact(key = null) {
  contactState.prefilled = key && labels[key] ? labels[key] : null;
  contactState.open = true;
}

export function closeContact() {
  contactState.open = false;
}
