import { useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export const useAuthListener = () => {
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event, session);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
};
