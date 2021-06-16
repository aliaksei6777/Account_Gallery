@isTest
public class TestAccountData {
    @testSetup
    public static void createAccounts(){
        List<Account> accounts = new List<Account>();
        Accounts.add(new Account(Name = 'Test', Type = 'Technology Partner'));
        Accounts.add(new Account(Name = 'Test2', Type = 'Installation Partner'));
       	insert accounts;
    }
    
	@isTest
    static void getTechTypes(){
        
        Test.startTest();
        List<Account> tech = AccountData.getAccountList('Technology Partner');
        Test.stopTest();
    
        System.assertEquals(tech.size(), 1);
    }    
    
	@isTest
    static void getAllTypes(){
        
        Test.startTest();
        List<Account> tech = AccountData.getAccountList('all');
        Test.stopTest();
    
        System.assertEquals(tech.size(), 2);
    }    
}