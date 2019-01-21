Rails.application.routes.draw do
  get 'dope/index'
  get 'dope/show'
  get 'dope/die'
  get 'dope/help'
  get 'ica/index'
  get 'test/index'
  get 'ica/search', to: "ica#search"
  get 'ica/bread/:bread', to: "ica#show"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
